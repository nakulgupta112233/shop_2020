const Sequelize = require('sequelize')

const db = new Sequelize('d5shg1p83mopgh' , 'sbgalhjgnxdhzm' , 'df9ec1ae99ef65168f130e4d7bbcd2c5b2753e95d3d450c1171d7dc0e2381c5b' ,{
  host: 'ec2-52-0-155-79.compute-1.amazonaws.com',
  dialect: 'mysql',
  pool: {
    min: 0,
    max: 5,
  }
  //storage: __dirname + '/users.db'
})

const User = db.define('users', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
  },
  password:{
    type: Sequelize.DataTypes.STRING(30),
    allowNull:false
  }
})

const Product = db.define('products', {
    P_id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    
    name: {
      type: Sequelize.DataTypes.STRING(30),
      unique: true,
      allowNull: false
    },
    manufacturer: {
      type : Sequelize.STRING 
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultvalue: 0.0
    },
    v_id: {
      type: Sequelize.DataTypes.INTEGER
    }

  })

  const Cart = db.define('carts', {
    C_id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: Sequelize.DataTypes.INTEGER
    },
    P_id: {
      type: Sequelize.DataTypes.INTEGER
    },
    v_id: {
      type: Sequelize.DataTypes.INTEGER
    },
    price: {
      type: Sequelize.FLOAT,
      defaultvalue: 0.0
    },
    quantity:{
      type: Sequelize.DataTypes.INTEGER
    },
    name: {
      type: Sequelize.DataTypes.STRING(30)
     
    },
    manufacturer: {
      type : Sequelize.STRING 
    }

  })

  const Vendor = db.define('vendors', {
    v_id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.DataTypes.STRING(30),
      unique: true,
      allowNull: false
    },
    password:{
      type: Sequelize.DataTypes.STRING(30),
      allowNull:false
    }
  })
/*Vendor.hasMany(Product)
Product.belongsTo(Vendor)

Cart.belongsTo(User)
User.hasMany(Cart)

Cart.belongsTo(Product)
Product.hasMany(Cart)
*/

db.sync()
.then(()=> console.log("database synced"))
.catch((err)=> console.log('error syncing database'))
module.exports = {
  db, User , Product,Vendor,Cart
}
