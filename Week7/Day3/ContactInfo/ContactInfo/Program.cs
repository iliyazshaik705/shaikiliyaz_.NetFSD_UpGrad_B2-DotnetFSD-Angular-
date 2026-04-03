
using ContactInfo.DataAccess;
using ContactInfo.Models;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

// Register DI
builder.Services.AddScoped<IContactService<Contact>, ContactService>();

var app = builder.Build();

app.UseStaticFiles();
app.UseRouting();

app.UseEndpoints(endpoints => endpoints.MapControllers());

app.Run();
