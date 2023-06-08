const unidadesFederativas = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RN", "RO", "RR", "RS", "SC", "SE", "SP",]
const emailRegex = "^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$i";
const cpfRegex = "^\\d{ 11}$";
const telefoneRegex = "^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$";
const cepRegex = "^[0-9]{8}$";
const ufRegex = "^[A-Z]{2}$";

use("mongo-ecomm");

db.createCollection("accounts", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["nome", "email", "senha", "dataCriacao", "cpf", "telefone", "endereco"],
      "additionalProperties": false,
      "properties": {
        "nome": {
          "bsonType": "string",
          "description": "'nome' must have at least 5 characters",
          "minLength": 5
        },
        "email": {
          "bsonType": "string",
          "description": "'email' must have at least 5 characters",
          "minLength": 5,
          "pattern": emailRegex
        },
        "senha": {
          "bsonType": "string",
          "minLength": 5,
          "description": "'password' must have at least 5 characters"
        },
        "dataCriacao": {
          "bsonType": "date",
        },
        "cpf": {
          "bsonType": "string",
          "minLength": 11,
          "maxLength": 11,
          "description": "Your 'cpf' must contain 11 numbers, no symbols",
          "pattern": cpfRegex
        },
        "telefone": {
          "bsonType": "string",
          "minLength": 10,
          "description": "'telefone' is invalid",
          "pattern": telefoneRegex
        },
        "endereco": {
          "bsonType": "object",
          "required": ["rua", "numero", "cep", "bairro", "cidade", "uf"],
          "properties": {
            "rua": {
              "bsonType": "string",
              "minLength": 1
            },
            "numero": {
              "bsonType": "string",
              "minLength": 1,
            },
            "complemento": {
              "bsonType": "string",
            },
            "cep": {
              "bsonType": "string",
              "minLength": 8,
              "maxLength": 8,
              "pattern": cepRegex
            },
            "bairro": {
              "bsonType": "string",
              "minLength": 1
            },
            "cidade": {
              "bsonType": "string",
              "minLength": 5,
            },
            "uf": {
              "bsonType": "string",
              "enum": unidadesFederativas,
              "minLength": 2,
              "maxLength": 2,
              "pattern": ufRegex
            },
          }
        },
      }, // account properties object
    } // jsonSchema
  } // validator
})