interface WebRequester {
  request(object: any): number;
}

class WebService {
  constructor(
    private webHost: string
  ) {}

  async request() {
    const response = await fetch(this.webHost, {
      "method": "GET",
    });
    return response;
  }
}

class WebAdapter implements WebRequester {
  private service: WebService;

  connect(currentService: WebService) {
    this.service = currentService;
  }

  request(request: any): number {
    let result = this.toJson(request);
    let response = this.service.request()
    if (!response) {
      return 200;
    }
    return 500;
  }

  toJson(request: any) {

  }
}

class WebClient {

  constructor(
    private webRequester: WebRequester
  ) {}

  makeObject() {}

  doWork() {
    let object = this.makeObject();
    let status = this.webRequester.request(object);
    if (status == 200) {
      console.log('OK');
    } else {
      console.log('NOT OK');
    }
    return;
  }
}

class Program {
  constructor() {
    const webHost: string = 'www.google.com';
    const service = new WebService(webHost);
    const adapter = new WebAdapter();
    adapter.connect(service);
    const client = new WebClient(adapter);
    client.doWork();

  }
}
