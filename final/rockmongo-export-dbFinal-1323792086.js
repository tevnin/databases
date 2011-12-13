
/** flow indexes **/
db.getCollection("flow").ensureIndex({
  "_id": 1
},[
  
]);

/** flow records **/
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58576a101258ff3a8df03"),
  "text": "what type of product will your idea produce?",
  "number": "1",
  "before": {
    "id": "",
    "answer": ""
  },
  "after": {
    "first": "2",
    "second": "6"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed585e6a101258ff3a8df04"),
  "text": "can your idea be mass produced?",
  "number": "2",
  "before": {
    "id": "1",
    "answer": "physical object"
  },
  "after": {
    "first": "3",
    "second": "4"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58632a101258ff3a8df05"),
  "text": "do you care about having full ownership of your produced idea?",
  "number": "3",
  "before": {
    "id": "2",
    "answer": "no"
  },
  "after": {
    "first": "shapeways",
    "second": "etsy"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58787a101258ff3a8df06"),
  "text": "can your idea handle scaling well?",
  "number": "4",
  "before": {
    "id": "2",
    "answer": "yes"
  },
  "after": {
    "first": "shapeways",
    "second": "5"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed587cba101258ff3a8df07"),
  "text": "do you care about having full ownership of your produced idea?",
  "number": "5",
  "before": {
    "id": "4",
    "answer": "yes"
  },
  "after": {
    "first": "quirky",
    "second": "kickStarter1"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58855a101258ff3a8df08"),
  "text": "is your idea a business or campaign?",
  "number": "6",
  "before": {
    "id": "1",
    "answer": "service"
  },
  "after": {
    "first": "7",
    "second": "11"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed588bca101258ff3a8df09"),
  "text": "do you care about making a profit from your produced idea?",
  "number": "7",
  "before": {
    "id": "6",
    "answer": "campaign"
  },
  "after": {
    "first": "8",
    "second": "IOBY"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed588eda101258ff3a8df0a"),
  "text": "do you care about knowing your investors?",
  "number": "8",
  "before": {
    "id": "7",
    "answer": "yes"
  },
  "after": {
    "first": "9",
    "second": "10"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58945a101258ff3a8df0b"),
  "text": "do you want to pay back the money you take from others?",
  "number": "9",
  "before": {
    "id": "8",
    "answer": "no"
  },
  "after": {
    "first": "indieGoGo",
    "second": "prosper1"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58a68a101258ff3a8df0f"),
  "text": "do you care about making a profit from your produced idea?",
  "number": "11",
  "before": {
    "id": "6",
    "answer": "business"
  },
  "after": {
    "first": "12",
    "second": "13"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58acba101258ff3a8df10"),
  "text": "do you want your investors to be involved in the production of your product?",
  "number": "12",
  "before": {
    "id": "11",
    "answer": "no"
  },
  "after": {
    "first": "ivp",
    "second": "angelFF2"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58b36a101258ff3a8df11"),
  "text": "do you care about connecting to investors in-person?",
  "number": "13",
  "before": {
    "id": "11",
    "answer": "yes"
  },
  "after": {
    "first": "14",
    "second": "17"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58b66a101258ff3a8df12"),
  "text": "do you want to pay back the money you take from others?",
  "number": "14",
  "before": {
    "id": "13",
    "answer": "no"
  },
  "after": {
    "first": "15",
    "second": "16"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58ba9a101258ff3a8df13"),
  "after": {
    "first": "indieGoGo2",
    "second": "kickStarter2"
  },
  "before": {
    "id": "14",
    "answer": "no"
  },
  "number": "15",
  "text": "if you are unable to reach your funding goal, can you still produce your product?"
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58c59a101258ff3a8df16"),
  "text": "do you want your investors to be involved in the production of your product?",
  "number": "16",
  "before": {
    "id": "14",
    "answer": "yes"
  },
  "after": {
    "first": "angelPro",
    "second": "prosper"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58c7fa101258ff3a8df18"),
  "text": "do you have a fully developed business plan or model?",
  "number": "17",
  "before": {
    "id": "13",
    "answer": "yes"
  },
  "after": {
    "first": "18",
    "second": "incAcc"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58ce1a101258ff3a8df19"),
  "text": "how much money do you need to get started?",
  "number": "18",
  "before": {
    "id": "17",
    "answer": "yes"
  },
  "after": {
    "first": "19",
    "second": "ventCap"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58d1ea101258ff3a8df1a"),
  "text": "can you afford to produce your idea yourself?",
  "number": "19",
  "before": {
    "id": "18",
    "answer": "a little"
  },
  "after": {
    "first": "bootstrap2",
    "second": "angelFF3"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58e12a101258ff3a8df1f"),
  "after": {
    "first": "",
    "second": ""
  },
  "before": {
    "id": "5",
    "answer": "no"
  },
  "number": "quirky",
  "text": "quirky",
  "url": [
    "http:\/\/www.quirky.com\/"
  ]
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed654abe2a8d4c112a441a2"),
  "after": {
    "first": "",
    "second": ""
  },
  "before": {
    "id": "3",
    "answer": "yes"
  },
  "number": "etsy",
  "text": "etsy",
  "url": [
    "http:\/\/www.etsy.com\/"
  ]
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed65563e2a8d4c112a441a3"),
  "after": {
    "first": "",
    "second": ""
  },
  "before": {
    "id": "7",
    "answer": "no"
  },
  "number": "IOBY",
  "text": "IOBY",
  "url": [
    "http:\/\/ioby.org\/"
  ]
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed655e5e2a8d4c112a441a4"),
  "after": {
    "first": "",
    "second": ""
  },
  "before": {
    "id": "9",
    "answer": "no"
  },
  "number": "indieGoGo",
  "text": "indieGoGo",
  "url": [
    "http:\/\/www.indiegogo.com\/"
  ]
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed655f3e2a8d4c112a441a5"),
  "after": {
    "first": "",
    "second": ""
  },
  "before": {
    "id": "15",
    "answer": "yes"
  },
  "number": "indieGoGo2",
  "text": "indieGoGo"
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed65618e2a8d4c112a441a6"),
  "after": {
    "first": "",
    "second": ""
  },
  "before": {
    "id": "9",
    "answer": "yes"
  },
  "number": "prosper1",
  "text": "prosper",
  "url": [
    "http:\/\/www.prosper.com\/"
  ]
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed65625e2a8d4c112a441a7"),
  "text": "prosper",
  "number": "prosper",
  "before": {
    "id": "16",
    "answer": "no"
  },
  "after": {
    "first": "",
    "second": ""
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58fd0a101258ff3a8df2f"),
  "text": "bootstrap",
  "number": "bootstrap2",
  "before": {
    "id": "19",
    "answer": "yes"
  },
  "after": {
    "first": "",
    "second": ""
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58eb0a101258ff3a8df24"),
  "text": "profounder or angel investor or friends & family",
  "number": "angelFF2",
  "before": {
    "id": "12",
    "answer": "no"
  },
  "after": {
    "first": "",
    "second": ""
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58fbaa101258ff3a8df2e"),
  "text": "angel investor or friends & family",
  "number": "angelFF3",
  "before": {
    "id": "19",
    "answer": "no"
  },
  "after": {
    "first": "",
    "second": ""
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58ec8a101258ff3a8df25"),
  "after": {
    "first": "",
    "second": ""
  },
  "before": {
    "id": "12",
    "answer": "no"
  },
  "number": "profounder",
  "text": "profounder",
  "url": [
    "https:\/\/www.profounder.com\/"
  ]
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58ee0a101258ff3a8df26"),
  "after": {
    "first": "",
    "second": ""
  },
  "before": {
    "id": "12",
    "answer": "yes"
  },
  "number": "ivp",
  "text": "the illuminated ventures project",
  "url": [
    "http:\/\/new.illvp.com\/"
  ]
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58efaa101258ff3a8df27"),
  "after": {
    "first": "",
    "second": ""
  },
  "before": {
    "id": "15",
    "answer": "no"
  },
  "number": "kickStarter2",
  "text": "kickStarter",
  "url": [
    "http:\/\/www.kickstarter.com\/"
  ]
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58f2ca101258ff3a8df29"),
  "text": "angelList or proFounder",
  "number": "angelPro",
  "before": {
    "id": "16",
    "answer": "yes"
  },
  "after": {
    "first": "",
    "second": ""
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58f89a101258ff3a8df2c"),
  "text": "venture capital",
  "number": "ventCap",
  "before": {
    "id": "18",
    "answer": "a lot"
  },
  "after": {
    "first": "",
    "second": ""
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58f9fa101258ff3a8df2d"),
  "text": "incubator or accelerator program",
  "number": "incAcc",
  "before": {
    "id": "17",
    "answer": "no"
  },
  "after": {
    "first": "",
    "second": ""
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed58d92a101258ff3a8df1b"),
  "after": {
    "first": "",
    "second": ""
  },
  "before": {
    "id": "3",
    "answer": "no"
  },
  "number": "shapeways",
  "text": "shapeways",
  "url": [
    "http:\/\/www.shapeways.com\/"
  ]
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ed6ac6b2410a584b0905fb0"),
  "after": {
    "first": "",
    "second": ""
  },
  "before": {
    "id": "5",
    "answer": "yes"
  },
  "number": "kickStarter1",
  "text": "kickStarter",
  "url": [
    "http:\/\/www.kickstarter.com\/"
  ]
});
db.getCollection("flow").insert({
  "_id": ObjectId("4edba4538418008d9157d68d"),
  "text": "shapeways",
  "number": "shapeways",
  "before": {
    "id": "4",
    "answer": "no"
  },
  "after": {
    "first": "",
    "second": ""
  },
  "url": "http:\/\/www.shapeways.com"
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ee12d8d7b4df9f20b000000"),
  "text": "can you afford to produce your idea yourself?",
  "number": "10",
  "before": {
    "id": "8",
    "answer": "yes"
  },
  "after": {
    "first": "bootstrap1",
    "second": "angelFF1"
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ee12e297b4df9620e000000"),
  "text": "bootstrap",
  "number": "bootstrap1",
  "before": {
    "id": "10",
    "answer": "yes"
  },
  "after": {
    "first": "",
    "second": ""
  }
});
db.getCollection("flow").insert({
  "_id": ObjectId("4ee12e5d7b4df9d50d000000"),
  "text": "angel investor or friends & family",
  "number": "angelFF1",
  "before": {
    "id": "10",
    "answer": "no"
  },
  "after": {
    "first": "",
    "second": ""
  }
});
