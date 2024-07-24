const projectData = require('../data/data');

const newIndex = async (request, response, next) => {
    try {
        await 
        response.render('pages/index-v2')
        } catch (err) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
        }
};

const contactPage = async (request, response, next) => {
    try {
        await 
        response.render('pages/contact')
        } catch (err) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
        }
};
const projectPage = async (request, response, next) => {
    try {
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
        response.status(200).json({success: {message: "Resume page successful. This is where a PDF of my resume will be."}, statusCode: 200});
        } catch (err) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
        }
};

const expPage = async (request, response, next) => {
try {
    await 
    response.render('pages/exp')
    } catch (err) {
    response.status(400)
        .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
    }
};

const eduPage = async (request, response, next) => {
    try {
        await 
        response.render('pages/edu')
        } catch (err) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
        }
};

const skillPage = async (request, response, next) => {
    try {
        await 
        response.render('pages/skills')
        } catch (err) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
        }
};

module.exports = {contactPage, projectPage, resumePage, eduPage, expPage, skillPage, newIndex};