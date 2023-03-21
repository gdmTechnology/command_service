export default {
  port: process.env.PORT || 3002,
  jwtSecret: process.env.JWT_SECRET || '1kZDnw8==jh',
  mongoUrl: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/myapp',
  kafkaClientId: process.env.KAFKA_CLIENTID || 'rem-kafka',
  kafkaBrokerPort: process.env.KAFKA_BROKER_PORT || 9092,
  kafkaBrokerHost: process.env.KAFKA_BROKER_HOST || 'broker',
  kafkaGroupId: process.env.KAFKA_GROUP_ID || 'command-service'
}
