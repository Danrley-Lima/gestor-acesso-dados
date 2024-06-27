import { Router } from "express";
import { getResource } from "../controllers/dataRepositoryController";

const router = Router();

/**
 * @swagger
 * /api/resource:
 *   post:
 *     tags:
 *       - Gestor
 *     summary: Busca dados de um recurso
 *     description: Este endpoint recupera dados para um recurso dos repositórios CKAN, DKAN ou SOCRATA.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resource'
 *           example: 
 *              repository:"CKAN"
 *     responses:
 *       200:
 *         description: Dados recuperados com sucesso.
 *       400:
 *         description: Repositório não informado.
 *       404:
 *         description: Repositório não encontrado.
 *       500:
 *         description: Erro interno de servidor.
 */
router.post('/resource', getResource);

export default router;