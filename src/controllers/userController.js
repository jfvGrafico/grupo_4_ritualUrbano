const path = require ("path");
const fs = require("fs");
const {validationResult} = require ("express-validator");
const { traceDeprecation } = require("process");
const bcryptjs = require ("bcryptjs");
const crypto = require("crypto");
let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json") , "utf-8"));
const carrito = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
);
const db = require("../database/models");
const { locals } = require("../app")

const userController = {
  login: (req, res) => {
    res.render("users/login", { carrito });
  },

  /* loginPost: (req, res) => {
    let usuarioLogeado = users.find(
      (user) =>
        req.body.email == user.email &&
        bcrypt.compareSync(req.body.password, user.password)
    );
    console.log(
      "entrega usuarioLogeado" +
        usuarioLogeado.password +
        " " +
        usuarioLogeado.email
    );
    if (usuarioLogeado != undefined) {
      delete usuarioLogeado.password;
      req.session.usuarioLogeado = usuarioLogeado;
      if (req.body.recuerdame != undefined) {
        const token = crypto.randomBytes(64).toString("base64");
        res.cookie("userLogged", token, { maxAge: 1000 * 60 * 60 * 24 * 90 });
        usuarioLogeado.token = token;
        console.log(usuarioLogeado);
        fs.writeFileSync(
          path.resolve(__dirname, "../data/loggedUser.json"),
          JSON.stringify(usuarioLogeado, null, " ")
        );
      }
      res.redirect("/user/profile");
    } else {
      res.redirect("/user/login");
    }
  }, */

  loginPost: (req, res) => {

    const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			return res.render('users/login', {
				errors: resultValidation.mapped(),
				oldData: req.body,
			});
		}


    db.User.findAll({ include: ["CategoryUser"] })
    .then((users) => {
      let usuarioLogeado = users.find(
        (user) =>
          req.body.email == user.email &&
          bcryptjs.compareSync(req.body.password, user.password)
      );

      usuarioLogeado.idCategory = usuarioLogeado.CategoryUser.nombre;
      if (usuarioLogeado != undefined) {
        delete usuarioLogeado.password;
        req.session.usuarioLogeado = usuarioLogeado;
        
        if (req.body.recuerdame != undefined) {
          const token = crypto.randomBytes(64).toString("base64");
          res.cookie("userLogged", token, {
            maxAge: 1000 * 60 * 60 * 24 * 90,
          });
          usuarioLogeado.token = token;
          console.log(usuarioLogeado);
          fs.writeFileSync(
            path.resolve(__dirname, "../data/loggedUser.json"),
            JSON.stringify(usuarioLogeado, null, " ")
          );
        }
        return res.redirect("/user/profile");
      } 
        return res.render("/users/login", {
        errors: {
          email: {
            msg: "The provided credentials being incorrect",
          },
        },
      });
    
    });
    /* .catch((error) => {
        res.send(error);
      }); */
  },

  registro: (req, res) => {
    res.render("users/registro", { title: "Registro", carrito });
  },

/*   registroPost: (req, res) =>{
        let errors = validationResult(req)
        if(errors.isEmpty()){
            users.forEach(usuario => {
                if(usuario.email == req.body.email){
                    res.send("El usuario ya existe")
                    res.redirect("/")
                }
                
            });

            let imagenCargada;
            if (req.files[0] != undefined) {
                imagenCargada = "/img/users/" + req.files[0].originalname;
            } else {
                imagenCargada = "/img/users/noimage.jpeg";
            }

            let usuarioAGuardar = {
                id: users[users.length - 1].id + 1,
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                password: bcrypt.hashSync(req.body.password, 10), 
                email: req.body.email,
                category: "user",
                image: imagenCargada
            }

            users.push(usuarioAGuardar)

            fs.writeFileSync(path.resolve(__dirname, "../data/users.json") , JSON.stringify(users, null, " "))
            res.redirect("/")

            
        } else {
            res.render("users/registro",  {title : "registro", mensajeDeError : errors.array(), old : req.body})
        }
        

    }, */

  registroPost: (req, res) => {
          const resultValidation = validationResult(req);
          console.log(resultValidation.errors)
          console.log("Body",req.body)
         

        if (resultValidation.errors.length > 0){
              return res.render("users/registro", { 
            //mapped convierte un array en objeto literal
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
            
          db.User.findOne({ where: { email: req.body.email } }).then((usuario) => {
              if (usuario) {
                return res.render("users/registro", {
                    errors: {
                    email: {
                      msg: "Este email ya esta registrado",
                    },
                  },
                  oldData: req.body,
                });
              } else {

                    let imagenCargada;
                    // if (req.files[0] != undefined) {
                    //   imagenCargada = "/img/users/" + req.files[0].originalname;
                    // } else {
                    //   imagenCargada = "/img/users/noimage.jpeg";
                    // }

                    if (req.file) {
                      imagenCargada = req.file.filename
                  } else { 
                    imagenCargada = "noimage.jpeg"
                  }
                
                db.User.create({
                  first_name: req.body.nombre,
                  last_name: req.body.apellido,
                  password: bcryptjs.hashSync(req.body.password, 10),
                  email: req.body.email,          
                  idCategory: 1,
                  image: imagenCargada
                })
                  .then(() => {
                    return res.redirect("/user/login");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            });
          

    
    // if (resultValidation.isEmpty()) {
      
    //   db.User.findOne({
    //     where: {
    //       email: req.body.email,
    //     },
    //   }).then((user) => {
    //     if (user) {
    //       return  res.redirect("users/registro");
    //     }

    //     let imagenCargada;
    //     if (req.files[0] != undefined) {
    //       imagenCargada = "/img/users/" + req.files[0].originalname;
    //     } else {
    //       imagenCargada = "/img/users/noimage.jpeg";
    //     }

    //     db.User.create({
    //       first_name: req.body.nombre,
    //       last_name: req.body.apellido,
    //       password: bcrypt.hashSync(req.body.password, 10),
    //       email: req.body.email,
    //       idCategory: 1,
    //       image: imagenCargada,
    //     })
    //     .then(() => {
    //       res.redirect("/login");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   });
    // } else {
    //   res.render("users/registro", {
        
    //     errors: resultValidation.mapped(),
    //     oldData: req.body,
    //   });
    // }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("userLogged"); //dejamos que las coockies expiren solas.
    fs.writeFileSync(path.resolve(__dirname, "../data/loggedUser.json"), "[]");

    res.redirect("/");
  },

  profile: (req, res) => {
    db.User.findAll()
    .then(() => {
      return res.render("users/profile", { title: "Perfil de usuario",carrito });
    })
  },
    
  

/*   editProfile: (req, res) => {
    let users = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/users.json"), "utf-8")
    );
    let imagenCargada;
    let userObj = users.find((user) => user.email == req.body.email);
    if (req.files[0] != undefined) {
      / * fs.rmSync(path.join(__dirname, ".../public/img/users/")); * /
      imagenCargada = "/img/users/" + req.files[0].originalname;
    } else {
      imagenCargada = userObj.image;
    }

    let newUserObj = {
      id: userObj.id,
      first_name: req.body.nombre,
      last_name: req.body.apellido,
      password: userObj.password,
      email: req.body.email,
      category: userObj.category,
      image: imagenCargada,
    };
    let arrayAGuardar = users.filter((user) => user.id != newUserObj.id);
    arrayAGuardar.push(newUserObj);
    fs.writeFileSync(
      path.join(__dirname, "../data/users.json"),
      JSON.stringify(arrayAGuardar, null, " ")
    );
    fs.writeFileSync(
      path.join(__dirname, "../data/loggedUser.json"),
      JSON.stringify(newUserObj, null, " ")
    );

    res.redirect("/user/profile");
  }, */

  editProfile: (req, res) => {
    let imagenCargada;
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      console.log("DE USEROBJ"+" "+ user.first_name + " " + user.email);
      if (req.files[0] != undefined) {
        /* fs.rmSync(path.join(__dirname, ".../public/img/users/")); */
        imagenCargada = "/img/users/" + req.files[0].originalname;
      } else {
        imagenCargada = user.image;
      }

      db.User.update({
        id: user.id,
        first_name: req.body.nombre,
        last_name: req.body.apellido,
        password: user.password,
        email: req.body.email,
        idCategory: user.category,
        image: imagenCargada,
      },{
        where: {
          id: user.id
        }
      }).then((userUp) => {
        console.log("DE USERUP" + " " + userUp);
        fs.writeFileSync(
          path.join(__dirname, "../data/loggedUser.json"),
          JSON.stringify(userUp, null, " ")
        );

        res.redirect("/user/profile");
      });
    });
  },

  listaUsuarios: (req, res) => {
    
    db.User.findAll({ include: ["CategoryUser"] }).then(function (usuarios) {
      res.render("users/listaUsuarios", {
        title: "Lista de Usuarios",
        usuarios
      });
    });


  },

  eliminarUsuario:  (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.userID,
      },
    });
    res.redirect("/user/editar/lista");
  },

  editarUsuario: (req, res) => {
   
    let userId = req.params.userID;
    let promUser = db.User.findByPk(userId, {
      include: ["CategoryUser"],
    });
    let promCategoryUser = db.CategoryUser.findAll();

    Promise.all([promUser, promCategoryUser])
      .then(([userObj, categoriesUser]) => {
        return res.render("users/usuariosEditar", {
          title: "Editar Usuarios",
          userObj,
          categoriesUser
        });
      })
      .catch((error) => res.send(error));
  },

  actualizarUsuario: (req, res) => {
    let imagenCargada;
    let obj = db.User.findByPk(req.body.idUser);    
    if (req.file != undefined) {
      imagenCargada = "/img/users/" + req.file.filename;
      console.log(imagenCargada);
    } else {
      imagenCargada = obj.image;
    }  
    
    db.User.update(
      {
        first_name: req.body.nombreUsuario,
        last_name: req.body.apellidoUsuario,
        email: req.body.emailUsuario,
        idCategory: req.body.categoriaUsuario,
        image: imagenCargada        
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/user/editar/lista");
  },


};



module.exports = userController;