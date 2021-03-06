import { BaseContext, ExtendableContext } from 'koa'
import { ObjectType } from 'typeorm/common/ObjectType'
import { EntitySchema } from 'typeorm'
import { Repository } from 'typeorm/repository/Repository'

declare module 'koa' {
  interface BaseContext {
    validate(value: any, message: string): void;

    getRepo<Entity>(target: ObjectType<Entity> | EntitySchema<Entity> | string): Repository<Entity>;

    params: { [key: string]: string };
    
   	state: {
  	  user: {
  	    uid: number
  	  }
  	}  	
  }
}
