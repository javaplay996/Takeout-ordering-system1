const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "新增",
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            },
            {
                "child":[
                    {
                        "buttons":[
                            "新增",
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"菜品管理",
                        "menuJump":"列表",
                        "tableName":"kuchuen"
                    }
                ],
                "menu":"菜品管理"
            },
            {
                "child":[
                    {
                        "buttons":[
                            "新增",
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"菜品展示",
                        "menuJump":"列表",
                        "tableName":"caipin"
                    }
                ],
                "menu":"菜品展示管理"
            },
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"收藏管理",
                        "tableName":"storeup"
                    },
                    {
                        "buttons":[
                            "新增",
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"餐厅资讯",
                        "tableName":"news"
                    },
                    {
                        "buttons":[
                            "新增",
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"客服管理",
                        "tableName":"chat"
                    },
                    {
                        "buttons":[
                            "新增",
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "tableName":"config"
                    }
                ],
                "menu":"系统管理"
            },
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"已取消订单",
                        "tableName":"orders/已取消"
                    },
                    {
                        "buttons":[
                            "查看",
                            "派送",
                            "删除"
                        ],
                        "menu":"已支付订单",
                        "tableName":"orders/已支付"
                    },
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"已退款订单",
                        "tableName":"orders/已退款"
                    },
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"已完成订单",
                        "tableName":"orders/已完成"
                    },
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"已派送订单",
                        "tableName":"orders/已派送"
                    },
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"未支付订单",
                        "tableName":"orders/未支付"
                    }
                ],
                "menu":"订单管理"
            }
        ],
        "frontMenu":[

        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"我的收藏",
                        "menuJump":"列表",
                        "tableName":"storeup"
                    }
                ],
                "menu":"收藏管理"
            },
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"已完成订单",
                        "tableName":"orders/已完成"
                    },
                    {
                        "buttons":[
                            "查看",
                            "确认收货"
                        ],
                        "menu":"已派送订单",
                        "tableName":"orders/已派送"
                    },
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"未支付订单",
                        "tableName":"orders/未支付"
                    },
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"已取消订单",
                        "tableName":"orders/已取消"
                    },
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"已支付订单",
                        "tableName":"orders/已支付"
                    },
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"已退款订单",
                        "tableName":"orders/已退款"
                    }
                ],
                "menu":"外卖订单管理"
            }
        ],
        "frontMenu":[

        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]

}
}
export default menu;
