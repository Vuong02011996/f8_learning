from odoo import api, fields, models


class MyModels(models.Model):
    _name = "my_models"
    _description = "my model des"

    name = fields.Char(string="Vuong")
    age = fields.Integer(int=10)
    school = fields.Text(string="KHTN")

