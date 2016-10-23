const knex = require('./knex_config.js')

function filterEventbyCity(city){
  return knex('event').where("city", city)
    .select(
      'event.id',
      'event.title',
      'event.location',
      'event.city',
      'event.state',
      'event.start_date',
      'event.start_time'
    ).first()
}

function filterEventbyCause(selectedCause){
  return knex('cause')
    .join('cause_event','cause.id', 'cause_event.cause_id')
    .join('event', 'cause_event.event_id', 'event.id')
    .select (
      'event.id',
      'event.title',
      'event.location',
      'event.city',
      'event.state',
      'event.start_date',
      'event.start_time'
    )
    .where('cause.name', selectedCause)
}


function filterEventbyCause_City(selectedCause, selectedCity){
  return knex('cause')
    .join('cause_event','cause.id', 'cause_event.cause_id')
    .join('event', 'cause_event.event_id', 'event.id')
    .select (
      'event.id',
      'event.title',
      'event.location',
      'event.city',
      'event.state',
      'event.start_date',
      'event.start_time',
      'cause.name'
    )
    .where('cause.name', selectedCause)
    .where('event.city', selectedCity)
}

function filterOrganizationbyCity(city){
  return knex('organization').where("city", city)
    .select(
      'organization.id',
      'organization.organization_name',
      'organization.city',
      'organization.state'
    )
}

function filterVolunteerbyCity(city){
  return knex('volunteer').where("city", city)
    .select(
      'volunteer.id',
      'volunteer.user_name',
      'volunteer.city',
      'volunteer.state'
    )
    .first()
}

function filterVolunteerbyCause(selectedCause){
  return knex('cause')
    .join('cause_volunteer','cause.id', 'cause_volunteer.cause_id')
    .join('volunteer', 'cause_volunteer.volunteer_id', 'volunteer.id')
    .select (
      'volunteer.id',
      'volunteer.user_name',
      'volunteer.city',
      'volunteer.state',
      'cause.name'
    )
    .where('cause.name', selectedCause)
}

function filterVolunteerbyCause_City(selectedCause, selectedCity){
  return knex('cause')
    .join('cause_volunteer','cause.id', 'cause_volunteer.cause_id')
    .join('volunteer', 'cause_volunteer.volunteer_id', 'volunteer.id')
    .select (
      'volunteer.id',
      'volunteer.user_name',
      'volunteer.city',
      'volunteer.state',
      'cause.name'
    )
    .where('cause.name', selectedCause)
    .where('volunteer.city', selectedCity)
}

module.exports = {
  filterEventbyCity: filterEventbyCity,
  filterEventbyCause: filterEventbyCause,
  filterEventbyCause_City: filterEventbyCause_City,
  filterOrganizationbyCity: filterOrganizationbyCity,
  filterVolunteerbyCity: filterVolunteerbyCity,
  filterVolunteerbyCause: filterVolunteerbyCause,
  filterVolunteerbyCause_City: filterVolunteerbyCause_City
}
