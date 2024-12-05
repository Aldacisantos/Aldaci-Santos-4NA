import { UserRepository } from "../repositories/userRepository";
import { isValidEmail, isValidName } from "../helpers/validationHelper";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name: string, email: string, password: string) {
    if (!isValidName(name)) {
      throw new Error("Nome inválido");
    }
    if (!isValidEmail(email)) {
      throw new Error("E-mail inválido");
    }
    return await this.userRepository.addUser(name, email, password);
  }

  async listUsers() {
    return await this.userRepository.getAllUsers();
  }
}