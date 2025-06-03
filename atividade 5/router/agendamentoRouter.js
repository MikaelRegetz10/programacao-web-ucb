const express = require('express')
const router = express.Router()

const agendamentoController = require('../controller/agendamentoController');

router.get('/', agendamentoController.getIndexView);
router.get('/agendamentos', agendamentoController.getAgendamentoView);
router.post('/agendar_consulta', agendamentoController.agendarConsulta);



module.exports = router