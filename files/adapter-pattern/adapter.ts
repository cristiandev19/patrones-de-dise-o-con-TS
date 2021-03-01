interface WebRequester {
  request(object: any): number;
}

class WebAdapter implements WebRequester {
  private service: WebService;

  connect(currentService: WebService) {
    this.service = currentService;
  }

  request(request: any): number {
    let result = this.toJson(request);
    let response = service.request()
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
