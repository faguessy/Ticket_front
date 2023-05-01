import http from '../http-common'

class TicketService {
  async findAll () {
    return await http.get('/tickets')
  }

  findById (id) {
    return http.get(`/tickets/${id}`)
  }

  getMsgByTicketId (id) {
    return http.get(`/messages/ticket/${id}`)
  }

  create (data) {
    return http.post('/tickets', data)
  }

  update (id, data) {
    return http.put(`/tickets/${id}`, data)
  }

  remove (id) {
    return http.delete(`/tickets/${id}`)
  }
}

export default new TicketService()
