const unidadesFederativas = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RN", "RO", "RR", "RS", "SC", "SE", "SP",]
const emailRegex = "^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$";
const cpfRegex = "^\\d{11}$";
const telefoneRegex = "^(1[1-9]|[4689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$";
const cepRegex = "^[0-9]{8}$";
const ufRegex = "^[A-Z]{2}$";

const tipo_objeto = "object";
const tipo_string = "string";

const id = {
  "bsonType": "objectId",
  "description": "invalid id"
};

const nome = {
  "bsonType": tipo_string,
  "description": "'nome' must have at least 5 characters",
  "minLength": 5
};

const email = {
  "bsonType": tipo_string,
  "description": "'email' must have at least 5 characters",
  "minLength": 5,
  "pattern": emailRegex
};

const senha = {
  "bsonType": tipo_string,
  "minLength": 5,
  "description": "'password' must have at least 5 characters"
};

const dataCriacao = {
  "bsonType": "date",
};

const cpf = {
  "bsonType": tipo_string,
  "minLength": 11,
  "maxLength": 11,
  "description": "Your 'cpf' must contain 11 numbers, no symbols",
  "pattern": cpfRegex
};

const telefone = {
  "bsonType": tipo_string,
  "minLength": 10,
  "description": "'telefone' is invalid",
  "pattern": telefoneRegex
};

const endereco = {
  "bsonType": tipo_objeto,
  "required": ["rua", "numero", "cep", "bairro", "cidade", "uf"],
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
    "cep": {
      "bsonType": tipo_string,
      "minLength": 8,
      "maxLength": 8,
      "pattern": cepRegex
    },
    "bairro": {
      "bsonType": tipo_string,
      "minLength": 1
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
};

use("mongo-ecomm");

db.accounts.drop(function (err, delOK) {
  if (err) throw err;
  if (delOK) console.log("Collection deleted");
  db.close();
});

db.createCollection("accounts", {
  validator: {
    $jsonSchema: {
      "bsonType": tipo_objeto,
      "required": ["_id", "nome", "email", "senha", "dataCriacao", "cpf", "telefone", "endereco"],
      "additionalProperties": false,
      "properties": {
        "_id": id,
        "nome": nome,
        "email": email,
        "senha": senha,
        "dataCriacao": dataCriacao,
        "cpf": cpf,
        "telefone": telefone,
        "endereco": endereco,
      }, // account properties object
    } // jsonSchema
  } // validator
});
