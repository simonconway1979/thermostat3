$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp);
  updateTemperature();

  $('#increaseTemp').click(function(){
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('#decreaseTemp').click(function() {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#reset').click(function(){
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#powerSavingOn').click(function() {
   thermostat.powerSavingOn();
   $('#power-saving-status').text('on')
   updateTemperature();
 })

 $('#powerSavingOff').click(function() {
   thermostat.powerSavingOff();
   $('#power-saving-status').text('off')
   updateTemperature();
 })

 function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=d9a6c94e18031e388a701fe92f0583ca';
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#current-temperature').text(data.main.temp);
    });
    };

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });


  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

});
