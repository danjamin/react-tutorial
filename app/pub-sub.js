var topics = {};

export function subscribe(topic, handler, context) {
  if (typeof context === undefined) {
    context = this;
  }
  
  if (!topics.hasOwnProperty(topic)) {
    topics[topic] = [];
  }

  topics[topic].push({
    handler: handler,
    context: context
  });
}

export function unsubscribe(topic, handler) {
  var subscribers;
  var subscriber;

  if (!topics.hasOwnProperty(topic)) {
    return;
  }

  subscribers = topics[topic];

  for (var i = 0, iMax = subscribers.length; i < iMax; i++) {
    subscriber = subscribers[i];
    if (subscriber.handler === handler) {
      subscribers.splice(i, 1);
      break;
    }
  }
}

export function publish(topic) {
  var subscribers;
  var args;

  args = Array.prototype.slice.call(arguments, 1);

  if (!topics.hasOwnProperty(topic)) {
    return;
  }

  subscribers = topics[topic];

  subscribers.forEach(function(subscriber) {
    subscriber.handler.apply(subscriber.context, args);
  });
}
