var increaseTemp = $('#increaseTemp')
var decreaseTemp = $('#decreaseTemp')
var reset = $('#reset')
var powerSavingOn = $('#powerSavingOn')
var powerSavingOff = $('#powerSavingOff')
var powerSavingStatus = $('#powerSavingStatus')
var temperature = $('#temperature')


$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp);
  updateTemperature();

  increaseTemp.click(function(){
    thermostat.increaseTemp();
    updateTemperature();
  });

  decreaseTemp.click(function() {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  reset.click(function(){
    thermostat.resetTemp();
    updateTemperature();
  });

  powerSavingOn.click(function() {
   thermostat.powerSavingOn();
   power-saving-status.text('on')
   updateTemperature();
 })

 powerSavingOff.click(function() {
   thermostat.powerSavingOff();
   power-saving-status.text('off')
   updateTemperature();
 })

  function updateTemperature() {
    temperature.text(thermostat.temp);
    temperature.attr('class', thermostat.energyUsage());
  };

});
