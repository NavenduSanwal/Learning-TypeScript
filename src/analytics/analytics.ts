function sendAnalytics(data: string) {
  // since sendAnalytics is called later, type of data param is any, but it will give error if noImplicitAny is true
  console.log('data: ', data);
}

sendAnalytics('User data...');
