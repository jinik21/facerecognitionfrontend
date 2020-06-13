
const data ={
    "status": {
        "code": 10000,
        "description": "Ok",
        "req_id": "eba3e522053a42edb90148e2fde9de8d"
    },
    "outputs": [
        {
            "id": "fe9c4b26f6f1419f919cf5db6ffcbba3",
            "status": {
                "code": 10000,
                "description": "Ok"
            },
            "created_at": "2020-06-13T01:42:10.354127353Z",
            "model": {
                "id": "a403429f2ddf4b49b307e318f00e528b",
                "name": "face",
                "created_at": "2016-10-25T19:30:38.541073Z",
                "app_id": "main",
                "output_info": {
                    "output_config": {
                        "concepts_mutually_exclusive": false,
                        "closed_environment": false,
                        "max_concepts": 0,
                        "min_value": 0
                    },
                    "message": "Show output_info with: GET /models/{model_id}/output_info",
                    "type": "detect-concept",
                    "type_ext": "detect-concept"
                },
                "model_version": {
                    "id": "34ce21a40cc24b6b96ffee54aabff139",
                    "created_at": "2019-01-17T19:45:49.087547Z",
                    "status": {
                        "code": 21100,
                        "description": "Model is trained and ready"
                    }
                },
                "display_name": "Face Detection"
            },
            "input": {
                "id": "b5ccb71a003f4d0d89def4ac1a884857",
                "data": {
                    "image": {
                        "url": "https://images.medicaldaily.com/sites/medicaldaily.com/files/styles/headline/public/2014/09/16/shutterstock188414387.jpg"
                    }
                }
            },
            "data": {
                "regions": [
                    {
                        "id": "hg8k55dhyfa0",
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0.72787964,
                                "left_col": 0.104374394,
                                "bottom_row": 0.90356076,
                                "right_col": 0.23136939
                            }
                        },
                        "data": {
                            "concepts": [
                                {
                                    "id": "ai_8jtPl3Xj",
                                    "name": "face",
                                    "value": 0,
                                    "app_id": "main"
                                }
                            ]
                        }
                    },
                    {
                        "id": "9pcesjg9199u",
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0.7377882,
                                "left_col": 0.44292653,
                                "bottom_row": 0.900939,
                                "right_col": 0.57011414
                            }
                        },
                        "data": {
                            "concepts": [
                                {
                                    "id": "ai_8jtPl3Xj",
                                    "name": "face",
                                    "value": 0,
                                    "app_id": "main"
                                }
                            ]
                        }
                    },
                    {
                        "id": "qveiq3c5psyb",
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0.38593298,
                                "left_col": 0.09834339,
                                "bottom_row": 0.58501196,
                                "right_col": 0.23871268
                            }
                        },
                        "data": {
                            "concepts": [
                                {
                                    "id": "ai_8jtPl3Xj",
                                    "name": "face",
                                    "value": 0,
                                    "app_id": "main"
                                }
                            ]
                        }
                    },
                    {
                        "id": "6cumtqazc3ho",
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0.3669029,
                                "left_col": 0.7574541,
                                "bottom_row": 0.59703994,
                                "right_col": 0.91284543
                            }
                        },
                        "data": {
                            "concepts": [
                                {
                                    "id": "ai_8jtPl3Xj",
                                    "name": "face",
                                    "value": 0,
                                    "app_id": "main"
                                }
                            ]
                        }
                    },
                    {
                        "id": "7al42wjmb7mq",
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0.0942863,
                                "left_col": 0.4483723,
                                "bottom_row": 0.24312685,
                                "right_col": 0.5546238
                            }
                        },
                        "data": {
                            "concepts": [
                                {
                                    "id": "ai_8jtPl3Xj",
                                    "name": "face",
                                    "value": 0,
                                    "app_id": "main"
                                }
                            ]
                        }
                    },
                    {
                        "id": "ei71tmhnydqt",
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0.07303546,
                                "left_col": 0.7699456,
                                "bottom_row": 0.24496688,
                                "right_col": 0.89640033
                            }
                        },
                        "data": {
                            "concepts": [
                                {
                                    "id": "ai_8jtPl3Xj",
                                    "name": "face",
                                    "value": 0,
                                    "app_id": "main"
                                }
                            ]
                        }
                    },
                    {
                        "id": "5dvoihljrbeq",
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0.722067,
                                "left_col": 0.73974776,
                                "bottom_row": 0.9184979,
                                "right_col": 0.8752283
                            }
                        },
                        "data": {
                            "concepts": [
                                {
                                    "id": "ai_8jtPl3Xj",
                                    "name": "face",
                                    "value": 0,
                                    "app_id": "main"
                                }
                            ]
                        }
                    },
                    {
                        "id": "v3x92xjukd55",
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0.079607725,
                                "left_col": 0.09855473,
                                "bottom_row": 0.22804046,
                                "right_col": 0.207468
                            }
                        },
                        "data": {
                            "concepts": [
                                {
                                    "id": "ai_8jtPl3Xj",
                                    "name": "face",
                                    "value": 0,
                                    "app_id": "main"
                                }
                            ]
                        }
                    },
                    {
                        "id": "5i20qizei1yv",
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0.3953848,
                                "left_col": 0.39897805,
                                "bottom_row": 0.588875,
                                "right_col": 0.56340796
                            }
                        },
                        "data": {
                            "concepts": [
                                {
                                    "id": "ai_8jtPl3Xj",
                                    "name": "face",
                                    "value": 0,
                                    "app_id": "main"
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ],
    "rawData": {
        "status": {
            "code": 10000,
            "description": "Ok",
            "req_id": "eba3e522053a42edb90148e2fde9de8d"
        },
        "outputs": [
            {
                "id": "fe9c4b26f6f1419f919cf5db6ffcbba3",
                "status": {
                    "code": 10000,
                    "description": "Ok"
                },
                "created_at": "2020-06-13T01:42:10.354127353Z",
                "model": {
                    "id": "a403429f2ddf4b49b307e318f00e528b",
                    "name": "face",
                    "created_at": "2016-10-25T19:30:38.541073Z",
                    "app_id": "main",
                    "output_info": {
                        "output_config": {
                            "concepts_mutually_exclusive": false,
                            "closed_environment": false,
                            "max_concepts": 0,
                            "min_value": 0
                        },
                        "message": "Show output_info with: GET /models/{model_id}/output_info",
                        "type": "detect-concept",
                        "type_ext": "detect-concept"
                    },
                    "model_version": {
                        "id": "34ce21a40cc24b6b96ffee54aabff139",
                        "created_at": "2019-01-17T19:45:49.087547Z",
                        "status": {
                            "code": 21100,
                            "description": "Model is trained and ready"
                        }
                    },
                    "display_name": "Face Detection"
                },
                "input": {
                    "id": "b5ccb71a003f4d0d89def4ac1a884857",
                    "data": {
                        "image": {
                            "url": "https://images.medicaldaily.com/sites/medicaldaily.com/files/styles/headline/public/2014/09/16/shutterstock188414387.jpg"
                        }
                    }
                },
                "data": {
                    "regions": [
                        {
                            "id": "hg8k55dhyfa0",
                            "region_info": {
                                "bounding_box": {
                                    "top_row": 0.72787964,
                                    "left_col": 0.104374394,
                                    "bottom_row": 0.90356076,
                                    "right_col": 0.23136939
                                }
                            },
                            "data": {
                                "concepts": [
                                    {
                                        "id": "ai_8jtPl3Xj",
                                        "name": "face",
                                        "value": 0,
                                        "app_id": "main"
                                    }
                                ]
                            }
                        },
                        {
                            "id": "9pcesjg9199u",
                            "region_info": {
                                "bounding_box": {
                                    "top_row": 0.7377882,
                                    "left_col": 0.44292653,
                                    "bottom_row": 0.900939,
                                    "right_col": 0.57011414
                                }
                            },
                            "data": {
                                "concepts": [
                                    {
                                        "id": "ai_8jtPl3Xj",
                                        "name": "face",
                                        "value": 0,
                                        "app_id": "main"
                                    }
                                ]
                            }
                        },
                        {
                            "id": "qveiq3c5psyb",
                            "region_info": {
                                "bounding_box": {
                                    "top_row": 0.38593298,
                                    "left_col": 0.09834339,
                                    "bottom_row": 0.58501196,
                                    "right_col": 0.23871268
                                }
                            },
                            "data": {
                                "concepts": [
                                    {
                                        "id": "ai_8jtPl3Xj",
                                        "name": "face",
                                        "value": 0,
                                        "app_id": "main"
                                    }
                                ]
                            }
                        },
                        {
                            "id": "6cumtqazc3ho",
                            "region_info": {
                                "bounding_box": {
                                    "top_row": 0.3669029,
                                    "left_col": 0.7574541,
                                    "bottom_row": 0.59703994,
                                    "right_col": 0.91284543
                                }
                            },
                            "data": {
                                "concepts": [
                                    {
                                        "id": "ai_8jtPl3Xj",
                                        "name": "face",
                                        "value": 0,
                                        "app_id": "main"
                                    }
                                ]
                            }
                        },
                        {
                            "id": "7al42wjmb7mq",
                            "region_info": {
                                "bounding_box": {
                                    "top_row": 0.0942863,
                                    "left_col": 0.4483723,
                                    "bottom_row": 0.24312685,
                                    "right_col": 0.5546238
                                }
                            },
                            "data": {
                                "concepts": [
                                    {
                                        "id": "ai_8jtPl3Xj",
                                        "name": "face",
                                        "value": 0,
                                        "app_id": "main"
                                    }
                                ]
                            }
                        },
                        {
                            "id": "ei71tmhnydqt",
                            "region_info": {
                                "bounding_box": {
                                    "top_row": 0.07303546,
                                    "left_col": 0.7699456,
                                    "bottom_row": 0.24496688,
                                    "right_col": 0.89640033
                                }
                            },
                            "data": {
                                "concepts": [
                                    {
                                        "id": "ai_8jtPl3Xj",
                                        "name": "face",
                                        "value": 0,
                                        "app_id": "main"
                                    }
                                ]
                            }
                        },
                        {
                            "id": "5dvoihljrbeq",
                            "region_info": {
                                "bounding_box": {
                                    "top_row": 0.722067,
                                    "left_col": 0.73974776,
                                    "bottom_row": 0.9184979,
                                    "right_col": 0.8752283
                                }
                            },
                            "data": {
                                "concepts": [
                                    {
                                        "id": "ai_8jtPl3Xj",
                                        "name": "face",
                                        "value": 0,
                                        "app_id": "main"
                                    }
                                ]
                            }
                        },
                        {
                            "id": "v3x92xjukd55",
                            "region_info": {
                                "bounding_box": {
                                    "top_row": 0.079607725,
                                    "left_col": 0.09855473,
                                    "bottom_row": 0.22804046,
                                    "right_col": 0.207468
                                }
                            },
                            "data": {
                                "concepts": [
                                    {
                                        "id": "ai_8jtPl3Xj",
                                        "name": "face",
                                        "value": 0,
                                        "app_id": "main"
                                    }
                                ]
                            }
                        },
                        {
                            "id": "5i20qizei1yv",
                            "region_info": {
                                "bounding_box": {
                                    "top_row": 0.3953848,
                                    "left_col": 0.39897805,
                                    "bottom_row": 0.588875,
                                    "right_col": 0.56340796
                                }
                            },
                            "data": {
                                "concepts": [
                                    {
                                        "id": "ai_8jtPl3Xj",
                                        "name": "face",
                                        "value": 0,
                                        "app_id": "main"
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }
}
const displayFaceBox=(box)=>{
    return {Box:box};
  }
const width =Number(500);
const height=Number(500);
const Clarifaiface = data.outputs[0].data.regions;
lst=[]
const fc=Clarifaiface.forEach((req,i)=>{
    const kc=req.region_info.bounding_box;
    const ab={}
    const width =Number(500);
    const height=Number(500);
    ab.leftCol=kc.left_col*width;
    ab.topRow=kc.top_row*height;
    ab.rightCol= width -(kc.right_col*width);
    ab.bottomRow=height-(kc.bottom_row*height);
    lst.push(displayFaceBox(ab));
});
calculateFaceLocation = (data)=>{

    const Clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box;
    return{
      leftCol:Clarifaiface.left_col*width,
      topRow:Clarifaiface.top_row*height,
      rightCol: width -(Clarifaiface.right_col*width),
      bottomRow:height-(Clarifaiface.bottom_row*height)
    } 

  }


console.log(lst);

console.log(displayFaceBox(calculateFaceLocation(data)));