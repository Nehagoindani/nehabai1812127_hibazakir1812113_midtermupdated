const Cv = require('../model/cv.model')

exports.educreate = ((req, res, next) => {
    let create = new Cv({
        name: req.body.name,
        Instititute_name: req.body.Instititute_name,
        Program: req.body.Program,
        start_Date1: req.body.start_Date1,
        End_Date1: req.body.End_Date1,
        Field: req.body.Field,
        Languages: req.body.Languages,
        activity: req.body.activity,
        Project_name: req.body.Project_name,
        start_Date2: req.body.start_Date2,
        End_Date2: req.body.End_Date2,
        field: req.body.field,
        Company_name: req.body.Company_name,
        Designation2: req.body.Designation2,
        start_Date3: req.body.start_Date3,
        End_Date3: req.body.End_Date3,
        Responsibilities: req.body.Responsibilities,
        Designation2: req.body.Designation2,
        name2: req.body.name2,
        Company: req.body.Company,
        Contact: req.body.Contact,
        Email: req.body.Email
    });

    create.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/savedView');
    });
});

exports.Cv_resume = (req, res) => {
    Cv.find().sort({_id : -1}).limit(1).exec((err, Cv) => {
        if (err) {
            return next(err);
        }
        res.render('saved', { page: 'list all products', menuId: 'saved', Cv: Cv })
    })
}
// exports.Cv_resume = (req, res) => {
//     Cv.findById(req.params.id, (err, Cv) => {
//         if (err) return next(err);
//         res.render('resume', { page: 'update product', menuId: 'updateform', Cv: Cv })
//     })
// }
exports.Cv_delete = (req, res) => {
    Cv.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err);
        res.redirect('/savedView');
        console.log("deleted");
    })
}

exports.Cv_update = (req, res) => {
    Cv.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, product) => {
        if (err) return next(err);
        res.redirect('/savedView');
    })
}

exports.Cv_view = (req, res) => {
    res.render('main', { page: 'main', menuId: 'main' })
}

exports.updateView = (req, res) => {
    Cv.findById(req.params.id, (err, Cv) => {
        if (err) return next(err);
        res.render('update', {page: 'update', menuId: 'update', Cv: Cv});
    })

}