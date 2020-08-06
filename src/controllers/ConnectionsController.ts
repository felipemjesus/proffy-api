import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {

  async create(request: Request, response: Response) { 
    const { user_id } = request.body;

    const trx = await db.transaction();

    try {
      await trx('connections').insert({
          user_id,
      });

      trx.commit();

      response.status(201).send();
    } catch (err) {
      trx.rollback();
      response.status(400).json({
        error: 'Erro ao criar nova conexão. Tente novamente.'
      });
    }
  }

}