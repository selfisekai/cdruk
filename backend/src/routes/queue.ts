import { ExtendableContext } from 'koa'
import { Order } from '../entity/Order'
import { Model } from '../entity/Model'
import { User } from '../entity/User'

export async function addOrder(ctx: ExtendableContext) {
  const { body } = ctx.request
  const repo = ctx.getRepo(Order)
  console.log(ctx.state.user)

  ctx.validate(typeof body.belongsTo === 'number', 'Merchant ID must be a number!')
  ctx.validate(typeof body.model === 'number', 'Model ID must be a number!')
  ctx.validate(typeof body.amount === 'number', 'Amount must be a number!')

  const userRepo = ctx.getRepo(User)
  
  const merchant = await userRepo.find({ where: { id: body.belongsTo, isMerchant: true }})
  ctx.validate(merchant.length != 0, 'This user is not a merchant!')

  const modelRepo = ctx.getRepo(Model)
  const model = await modelRepo.find({ where: { id: body.model }})
  ctx.validate(model.length != 0, 'Requested model ID is invalid!')

  ctx.validate(body.amount > 0, 'Amount can not be lower than 1!') // /r/expectedfactorial
  
  const order = new Order()
  order.requestedBy = ctx.state.user.uid
  order.belongsTo = body.belongsTo
  order.model = body.model
  order.amount = body.amount
  order.timestamp = Date.now()
  order.cost = -1 // TBD
  order.status = "new"

  await repo.save(order)
  ctx.body = {
  	data: {
  	  status: "success"
  	}
  }
}

export async function setOrderStatus(ctx: ExtendableContext) {
  const { body } = ctx.request
  const validStates = ['new','doing','done','aborted']
  ctx.validate(validStates.includes(body.status), 'Invalid state!')
  const repo = ctx.getRepo(Order)
  let order = await repo.find({ where: { id: body.id, belongsTo: ctx.state.user.uid}})
  ctx.validate(order.length != 0, 'Invalid order!')
  order[0].status = body.status

  await repo.save(order[0])
  
  ctx.body = {
  	data: {
  	  status: "success"
  	}
  }
}

export async function getOrderList(ctx: ExtendableContext) {
  const { body } = ctx.request
  const repo = ctx.getRepo(Order)
  const orders = await repo.find({ where: { requestedBy: ctx.state.user.uid }})
  ctx.validate(orders.length != 0, 'This user has no orders!')
  ctx.body = {
  	data: {
  	  orders
  	}
  }
}

export async function getMerchantQueue(ctx: ExtendableContext) {
  const { body } = ctx.request
  const repo = ctx.getRepo(Order)
  const orders = await repo.find({ where: { belongsTo: ctx.state.user.uid }})
  ctx.validate(orders.length != 0, 'This merchant has no orders!')
  ctx.body =  {
  	data: {
  		orders
  	}
  }
}