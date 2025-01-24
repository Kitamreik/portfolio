const projectData = require('../data/new-data');
const headstarterData = require('../data/headstarter-data');

const headstarterPage = async (request, response, next) => {
    try {
        await response.render('pages/headstarter', {
            headstarter: headstarterData
        })
    } catch (err) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
    }
}

const bonusProject = async (request, response, next) => {
    try {
        response.status(200).json({success: {message: "Bonus project page successful. This is where the project information will be. Keep in touch for more updates!"}, statusCode: 200});
    } catch (error) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
    }
}

const newIndex = async (request, response, next) => {
    try {
        await 
        response.render('pages/index-v2')
        } catch (err) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
        }
};

const projectPage = async (request, response, next) => {
    try {
        response.render('pages/23-24-proj', {
            newData: projectData
        })
        } catch (err) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
        }
};
const resumePage = async (request, response, next) => {
    try {
        await 
        response.render("pages/resume")
        //response.status(200).json({success: {message: "Resume page successful. This is where a PDF of my resume will be."}, statusCode: 200});
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

const expPage = async (request, response, next) => {
    try {
        await 
        response.render('pages/exp')
        } catch (err) {
        response.status(400)
            .json({ error: { message: "Something went wrong with getting to the resource!" }, statusCode: 400 });
        }
};


module.exports = {projectPage, resumePage, eduPage, newIndex, headstarterPage, expPage, bonusProject};

// Deprecated due to consolidation - skills/exp/contact
/*
const contactPage = async (request, response, next) => {
    try {
        await 
        response.render('pages/contact')
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
*/