const unidadesFederativas = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RN", "RO", "RR", "RS", "SC", "SE", "SP",]
const emailRegex = "^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$";
const cpfRegex = "^\\d{11}$";
const telefoneRegex = "^(1[1-9]|[4689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$";
const cepRegex = "^[0-9]{8}$";
const ufRegex = "^[A-Z]{2}$";

const tipo_objeto = "object";
const tipo_string = "string";
const tipo_array = "array";

const orderId = {
  "bsonType": "objectId",
  "description": "invalid id"
};
const dataPedido = {
  "bsonType": "date",
};
const contaCompradora = {
  "bsonType": tipo_objeto,
  "description": "'account' not found",
  "required": ["accountId", "nome"],
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "bsonType": "objectId",
      "description": "id da conta"
    },
    "nome": {
      "bsonType": tipo_string,
      "description": "nome da pessoa proprietária da conta",
      "minLength": 5
    }
  }
};

const enderecoEntrega = {
  "bsonType": "object",
  "required": ["bairro", "rua", "numero", "cep", "cidade", "uf"],
  "properties": {
    "rua": {
      "bsonType": tipo_string,
      "minLength": 1
    },
    "numero": {
      "bsonType": tipo_string,
      "minLength": 1,
    },
    "complemento": {
      "bsonType": tipo_string,
    },
    "bairro": {
      "bsonType": tipo_string,
      "minLength": 1
    },
    "cep": {
      "bsonType": tipo_string,
      "minLength": 8,
      "maxLength": 8,
      "pattern": cepRegex
    },
    "cidade": {
      "bsonType": tipo_string,
      "minLength": 5,
    },
    "uf": {
      "bsonType": tipo_string,
      "enum": unidadesFederativas,
      "minLength": 2,
      "maxLength": 2,
      "pattern": ufRegex
    },
  }
}

use("mongo-ecomm");

db.orders.drop(function (err, delOK) {
  if (err) throw err;
  if (delOK) console.log("Collection deleted");
  db.close();
});

db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      "bsonType": tipo_objeto,
      "required": ["_id", "dataPedido", "account", "enderecoEntrega", "items"],
      "additionalProperties": false,
      "properties": {
        "_id": orderId,
        "dataPedido": dataPedido,
        "account": contaCompradora,
        "enderecoEntrega": enderecoEntrega,
        "items": {
          "bsonType": "array",
          "required": ["productId", "quantidade", "precoUnitario"],
          "additionalProperties": false,
          "properties": {
            "productId": {
              "bsonType": "objectId",
            },
            "quantidade": {
              "bsonType": "int",
              "minimum": 1
            },
            "desconto": {
              "bsonType": "int",
              "minimum": 1 | null,
            },
            "precoUnitario": {
              "bsonType": ["int", "double"],
            }
          }, // items properties object
        }
      }, // properties objects
    } // jsonSchema
  } // validator
})