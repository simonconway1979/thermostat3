require 'data_mapper'
require 'dm-postgres-adapter'

class ThermostatDetails

  include DataMapper::Resource

  property :id, Serial
  property :city, String
  property :temperature, Integer
  property :PowerSaving, Boolean

end

DataMapper.setup(:default, "postgres://localhost/thermostat")
DataMapper.finalize
DataMapper.auto_upgrade!
