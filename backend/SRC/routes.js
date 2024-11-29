const express = require('express');
const router = express.Router();

const clientes = require('./controller/controller_clientes');

router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes/:id', clientes.update);
router.delete('/clientes/:id', clientes.deletar);

const fornecedor = require('./controller/controller_fornecedor');

router.post('/fornecedor', fornecedor.create);
router.get('/fornecedor', fornecedor.read);
router.put('/fornecedor/:id', fornecedor.update);
router.delete('/fornecedor/:id', fornecedor.deletar);

const pedidos = require('./controller/controller_pedidos');

router.post('/pedidos', pedidos.create);
router.get('/pedidos', pedidos.read);
router.put('/pedidos/:id', pedidos.update);
router.delete('/pedidos/:id', pedidos.deletar);

const produtos = require('./controller/controller_produtos');

router.post('/produtos', produtos.create);
router.get('/produtos', produtos.read);
router.put('/produtos/:id', produtos.update);
router.delete('/produtos/:id', produtos.deletar);

const telefone = require('./controller/controller_telefone');

router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone/:id', telefone.update);
router.delete('/telefone/:id', telefone.deletar);

module.exports = router;