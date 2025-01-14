export interface IMvp {
  SayHello(req: HelloRequest): Promise<HelloReply>
  Check(req: HealthCheckRequest): Promise<HealthCheckResponse>
}

export interface DubboClientsTstubService {
  mvp: IMvp
}
// define enum
enum ServingStatus {
  UNKNOWN = 0,
  SERVING = 1,
  NOT_SERVING = 2,
  SERVICE_UNKNOWN = 3 // Used only by the Watch method.
}

// define request && response, 实际代码可以根据不同的namespace生成到不同的目录
export interface HealthCheckResponse {
  status: ServingStatus
}

export interface HealthCheckRequest {
  service: string
}

export interface HelloRequest {
  name: string
}

export interface HelloReply {
  message: string
}

export const Mvp = {
  SayHello: {
    path: '/helloworld.Mvp/SayHello',
    encode(data: HelloRequest) {
      return 'helloworld.HelloRequest'
    },
    decode(data: any) {
      return 'helloworld.HelloReply'
    }
  },
  Check: {
    path: '/helloworld.Mvp/Check',
    encode(data: HealthCheckRequest) {
      return 'helloworld.HealthCheckRequest'
    },
    decode(data: any) {
      return 'helloworld.HealthCheckResponse'
    }
  }
}
