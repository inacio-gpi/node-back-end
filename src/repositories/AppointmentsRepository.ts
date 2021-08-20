import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

// DTO Data Transfer Object

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    // const findAppointment = this.appointments.find(appointment =>
    //   isEqual(date, appointment.date),
    // );
    const findAppointment = await this.findOne({
      where: { date },
    });
    return findAppointment || null;
  }
}
export default AppointmentsRepository;
