// Defining templates in one module to avoid boilerplate

const eventEditTemplateSource = document.getElementById('event-edit-template').innerHTML;
const eventEditTemplate = Handlebars.compile(eventEditTemplateSource);
const eventContentsTemplateSource = document.getElementById('event-contents-template').innerHTML;
const eventContentsTemplate = Handlebars.compile(eventContentsTemplateSource);

module.eventEditTemplate = eventEditTemplate;
module.eventContentsTemplate = eventContentsTemplate;
