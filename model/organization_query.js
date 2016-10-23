const knex = require('./knex_config.js')

// *********** SHOULD WE RESTRICT THE USER DATA RETURNED? ******** //
function findOrganizationData(orgName){
  return knex('organization')
  .where('user_name',orgName).first()
  .then((userData) => {
    if (typeof userData === 'undefined') {
      return
    } else {
      userData.type = 'organization'
      return userData
    }
  })
}

function addOrganizationInfo(orgName, orgInfo){
  return knex('organization')
    .where('user_name', orgName)
    .insert({
      orgInfo: orgInfo
    })
}

function findAllOrganization(){
  return knex('organization')
  .select(
    'organization.id',
    'organization.organization_name',
    'organization.city',
    'organization.state'
  )
}

function findOrganizationbyID(id){
  return knex('organization')
    .where("id", id)
    .select(
      'organization.id',
      'organization.user_name',
      'organization.organization_name',
      'organization.about',
      'organization.website',
      'organization.org_logo_url',
      'organization.email',
      'organization.phone_number',
      'organization.contact',
      'organization.street',
      'organization.city',
      'organization.state',
      'organization.zip'
    )
    .first()
}

function findOrganizationID(orgName){
  return knex('organization')
    .where("user_name", orgName)
    .select('organization.id')
    .first()
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

function updateOrganizationUser(orgID, updatedInfo){
  return knex('organization').where('id', orgID)
  .update(updatedInfo)
}

function deleteOrganizationUser(orgID){
  return knex('organization').where('id', orgID)
    .del()
}

module.exports = {
  findOrganizationData: findOrganizationData,
  addOrganizationInfo: addOrganizationInfo,
  findAllOrganization: findAllOrganization,
  findOrganizationbyID: findOrganizationbyID,
  filterOrganizationbyCity: filterOrganizationbyCity,
  updateOrganizationUser: updateOrganizationUser,
  deleteOrganizationUser: deleteOrganizationUser
}
