import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  requestedBy?: number;

  @Column()
  belongsTo?: number;

  @Column()
  model?: number;

  @Column()
  amount?: number;

  @Column()
  timestamp?: number;

  @Column()
  cost?: number;

  @Column()
  status?: string;
  
}
