module.exports = {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
        title: 'Bill Management', // Title (required)
        version: '1.0.0', // Version (required)
    },
    components: {
        securitySchemes: {
            Bearer: {
                type: 'apiKey',
                name: 'token',
                in: 'header'
            }
        }
    },
    security: [{
        Bearer: []
    }],
    definitions: {
        mailSchema: {
            type: 'object',
            properties: {
                mail: {
                    type: 'string',
                    example: '1075220132@qq.com'
                },
                username: {
                    type: 'string',
                    example: 'lrh'
                }
            }
        },
        loginSchema: {
            type: 'object',
            properties: {
                username: {
                    type: 'string',
                    example: 'lrh'
                },
                password: {
                    type: 'string',
                    example: '112233'
                }
            }
        },
        keepAliveSchema: {
            type: 'object',
            properties: {
                username: {
                    type: 'string',
                    example: 'lrh'
                }
            }
        },
        registerSchema: {
            type: 'object',
            properties: {
                username: {
                    type: 'string',
                    example: 'lrh'
                },
                password: {
                    type: 'string',
                    example: '112233'
                },
                mail: {
                    type: 'string',
                    example: '1075220132@qq.com'
                },
                code: {
                    type: 'string',
                    example: "542324"
                }
            }
        },
        searchSchema: {
            type: 'object',
            properties: {
                index: {
                    type: 'number',
                    example: 0
                },
                total: {
                    type: 'number',
                    example: 10
                },
                searchWord: {
                    type: 'string',
                    example: ''
                },
            }
        },
        createUniSchema: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    example: '江汉大学'
                },
            }
        },
        apiResponse: {
            type: 'object',
            properties: {
                code: {
                    type: 'integer',
                    example: 200
                },
                message: {
                    type: 'string',
                    example: 'Success'
                },
                data: {
                    type: 'object'
                }
            }
        },
        user: {
            type: 'object',
            properties: {
                username: {
                    type: 'string',
                    example: 'lrh'
                },
                avator: {
                    type: 'string',
                    example: '/avator/avator.png'
                },
                intro: {
                    type: 'string',
                    example: 'Today is a good day'
                },
                gender: {
                    type: 'string',
                    example: 'male'
                },
                birthday: {
                    type: 'integer',
                    example: 12144534
                },
                place: {
                    type: 'string',
                    example: 'SingaporeA/ng Mo Kio'
                },
                news: {
                    type: 'integer',
                    example: 32
                },
                follower: {
                    type: 'integer',
                    example: 65
                },
                followee: {
                    type: 'integer',
                    example: 92
                },
                love: {
                    type: 'integer',
                    example: 23
                }
            }
        }
    },
    apis: ['./src/controller/*.js'],
};