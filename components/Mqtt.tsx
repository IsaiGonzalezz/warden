import mqtt, { IClientPublishOptions } from 'mqtt';

const options  = {
    username: 'Raspberry-GOD',
    password: '3541587873'
}

// Conexión al broker MQTT
export const client = mqtt.connect('ws://192.168.1.241:9001', options);

client.on('connect', () => {
  console.log('Conectado al broker MQTT');

  // Suscripción al topic de los sensores
  client.subscribe('sensor/metano', {}, (err: Error | null, granted: mqtt.ISubscriptionGrant[] | undefined) => {
    if (err) {
      console.error('Error al suscribirse al topic metano', err);
    }
  });    

  client.subscribe('sensor/fuego', {}, (err: Error | null, granted: mqtt.ISubscriptionGrant[] | undefined) => {
    if (err) {
      console.error('Error al suscribirse al topic fuego', err);
    }
  });   
});

// Escucha de mensajes del broker
client.on('message', (topic: string, message: Buffer, packet: mqtt.Packet) => {
  console.log(`Mensaje recibido en ${topic}: ${message.toString()}`);
});
188