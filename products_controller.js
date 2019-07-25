module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.create_product().then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({ errorMessage: "Something has gone Wrong. We are have been informed" })
            console.log(err)
        })
    },
    getOne: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_product().then(() => {
            res.sendStatus(200).send(product)
        }).catch(err => {
            res.status(500).send({ errorMessage: "Something has gone Wrong. We are have been informed" })
            console.log(err)
        })
    },
    getAll: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products().then(() => {
            res.sendStatus(200).send(product)
        }).catch(err => {
            res.status(500).send({ errorMessage: "Something has gone Wrong. We are have been informed" })
            console.log(err)
        })
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.update_product().then(() => {
            res.sendStatus(200).send(product)
        }).catch(err => {
            res.status(500).send({ errorMessage: "Something has gone Wrong. We are have been informed" })
            console.log(err)
        })
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.delete_product().then(() => {
            res.sendStatus(200).send(product)
        }).catch(err => {
            res.status(500).send({ errorMessage: "Something has gone Wrong. We are have been informed" })
            console.log(err)
        })
    }
}