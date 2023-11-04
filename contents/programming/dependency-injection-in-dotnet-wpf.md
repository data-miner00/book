---
title: Dependency Injection in .NET 6 WPF
subtitle: A stepwise guide on setting up dependency injection in WPF project with Autofac
topic: Programming
displayTopic: Programming
directory: programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - wpf
  - di
  - autofac
  - c#
updatedAt: 2023-11-04T08:28:42.756Z
createdAt: 2023-11-04T08:28:42.756Z
---

In this article, I will demonstrate the steps needed to configure a WPF project to use dependency injection. I will use [Autofac](https://autofac.org/) in the demonstration but other DI frameworks works in a similar way too.

## Understanding WPF

WPF stands for Windows Presentation Foundation. It is used for creating Windows-based form application that utilizes a wide variety of contemporary markup technology. The main entry point of the WPF program is the `App.xaml` and `App.xaml.cs` files. It is equivalent to `Program.cs` in other .NET applications. The `MainWindow` is the window that is called by `App` on startup to display the contents.

## Version Check

This demonstration is tested with the technologies with the following versions:

| Index | Technology                              | Version        |
| ----- | --------------------------------------- | -------------- |
| 1.    | dotnet CLI                              | 7.0.304        |
| 2.    | Target Framework                        | net6.0-windows |
| 3.    | Autofac                                 | 7.1.0          |
| 4.    | Autofac.Configuration                   | 6.0.0          |
| 5.    | Microsoft.Extensions.Configuration      | 7.0.0          |
| 6.    | Microsoft.Extensions.Configuration.Json | 7.0.0          |

## Creating Container Config

First, create a class file named `ContainerConfig.cs`. This is the file that we will use for registering dependencies and any other startup configuration.

```cs[ContainerConfig.cs]
using Autofac;

internal static class ContainerConfig
{
	public static IContainer Configure()
	{
		var builder = new ContainerBuilder();

		// register services required
		builder.RegisterType<MyHandler>().As<IHandler>().SingleInstance();
		builder.RegisterType<MyService>().As<IService>().SingleInstance();

		// register the forms required
		builder.RegisterType<MainWindow>().SingleInstance();

		return builder.Build();
	}
}
```

## Storing the Container

Remember that `App.xaml.cs` is the actual entry point of the program, we will need to store the container instance somewhere in the class.

We will create two static properties to store the container and the scope. Depending on the DI framework that you are using, modify this section to suit the philosophy of the framework.

The container is obtained from the `ContainerConfig` file's `Configure` method and the scope is derived from the `Container` property.

```cs[App.xaml.cs]
using System.Windows;
using Autofac;

public partial class App : Application
{
	public static IContainer Container { get; private set; } = ContainerConfig.Configure();

	public static ILifetimeScope Scope { get; private set; } = Container.BeginLifetimeScope();
}
```

Next, override the `OnStartup` to call the main window for display through the DI container and dispose the container `OnExit`.

```cs[App.xaml.cs]
protected override void OnStartup(StartupEventArgs e)
{
	var mainWindow = Scope.Resolve<MainWindow>();
	mainWindow.Show();

	base.OnStartup(e);
}

protected override void OnExit(ExitEventArgs e)
{
	Container.Dispose();

	base.OnExit(e);
}
```

## Remove Auto Startup

By default, the application will call the `MainWindow` automatically on startup. The catch is, this `MainWindow` is not managed by the DI container. As a result, if you are using DI in the project, you will end up having **2** separate `MainWindow` open during the startup.

To fix that, head over to `App.xaml` to remove `StartupUri` property.

```diff[App.xaml]
  <Application x:Class="MyWpfApp"
               xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
               xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
               xmlns:local="clr-namespace:MyWpfApp"
-              StartupUri="MainWindow.xaml">
      <Application.Resources>

      </Application.Resources>
  </Application>
```

This will only run one instance of `MainWindow` that is managed by the DI container.

## Using Dependencies

With the DI container properly set up, we can now use the dependencies freely in the project as long as the dependencies are properly registered in the `ContainerConfig.cs` file. Here is a trivial example with `MainWindow.xaml.cs`. Try to keep the `this.InitializeComponent` method call on the top of the constructor to prevent exception of manipulating the form element when the form is not initialized.

```cs[MainWindow.xaml.cs]
public partial class MainWindow : Window
{
	private readonly IHandler handler;
	private readonly IService service;

	public MainWindow(IHandler handler, IService service)
	{
		this.InitializeComponent();

		this.handler = handler;
		this.service = service;
	}
}
```

## Parsing JSON Configurations

To use a JSON configuration file like `appsettings.json` in the WebApi project, we can configure them as well.

Let's say we have a configuration file named `appsettings.json` that has the following contents.

```json[appsettings.json]
{
	"MyConfig": {
		"Sleep": 1000,
		"Theme": "dark"
	}
}
```

We need to create the options file that reflect the `MyConfig` section. So, create a file named `MyConfigOption.cs` with the following contents.

```cs[MyConfigOption.cs]
public class MyConfigOption
{
	public int Sleep { get; set; }
	public string Theme { get; set; }
}
```

Finally, register the `appsettings.json` file in `ContainerConfig.cs` and resolve the configuration option for usage.

```diff[ContainerConfig.cs]
  using Autofac;
+ using Autofac.Configuration;
+ using Microsoft.Extensions.Configuration;

  internal static class ContainerConfig
  {
	  public static IContainer Configure()
	  {
		  var builder = new ContainerBuilder();

+   	  var configBuilder = new ConfigurationBuilder();
+         configBuilder.AddJsonFile("appsettings.json");

+         var config = configBuilder.Build();
+         var module = new ConfigurationModule(configBuilder.Build());
+         builder.RegisterModule(module);

		  // Get the deserialized config of `MyConfig` section.
+         var myConfig = config.GetSection("MyConfig").Get<MyConfigOption>();

		  // Console.WriteLine(myConfig.Theme);

		  // register services required
		  builder.RegisterType<MyHandler>().As<IHandler>().SingleInstance();
		  builder.RegisterType<MyService>().As<IService>().SingleInstance();

		  // register the forms required
		  builder.RegisterType<MainWindow>().SingleInstance();

		  return builder.Build();
	  }
  }
```

## Reference

- [Dependency Injection in WPF in .NET 6 Including the Factory Pattern](https://www.youtube.com/watch?v=dLR_D2IJE1M)
- [Error: No matching constructor found on type](https://stackoverflow.com/questions/41327777/error-no-matching-constructor-found-on-type)
