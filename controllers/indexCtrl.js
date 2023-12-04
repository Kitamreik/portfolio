const projectData = require('../data/data');

const aboutPage = async (request, response, next) => {
    try {
      await 
        response.status(200).json({success: {message: "About page successful"}, statusCode: 200});
    } catch (err) {
      response.status(400)
        .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
    }
};
const contactPage = async (request, response, next) => {
    try {
        await 
        response.status(200).json({success: {message: "Contact page successful"}, statusCode: 200});
        } catch (err) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
        }
};
const projectPage = async (request, response, next) => {
    try {
        //await response.status(200).json({success: {message: "Project page successful"}, data: projectData, statusCode: 200})
        response.render('pages/projects', {
            data: projectData
        })
        } catch (err) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
        }
};
const resumePage = async (request, response, next) => {
    try {
        await 
        response.status(200).json({success: {message: "Resume page successful"}, statusCode: 200});
        } catch (err) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
        }
};


module.exports = {aboutPage, contactPage, projectPage, resumePage};