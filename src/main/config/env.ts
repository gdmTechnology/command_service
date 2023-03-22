export default {
  port: process.env.PORT || 3007,
  jwtSecret: process.env.JWT_SECRET || '1kZDnw8==jh',
  mongoUrl: process.env.MONGO_URL || 'mongodb://rem:rem2023@mongo:27017/rem?authSource=admin',
  kafkaClientId: process.env.KAFKA_CLIENTID || 'rem-kafka',
  kafkaBrokerPort: process.env.KAFKA_BROKER_PORT || 9092,
  kafkaBrokerHost: process.env.KAFKA_BROKER_HOST || 'broker',
  kafkaGroupId: process.env.KAFKA_GROUP_ID || 'command-service'
}
