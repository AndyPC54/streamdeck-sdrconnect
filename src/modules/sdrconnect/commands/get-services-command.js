import { Command } from '@/modules/sdrconnect/commands/command'

/**
 * The GetServicesCommand class, a subclass of Command, is used for requesting
 * service information from SDRConnect.
 */
export class GetServicesCommand extends Command {
  /**
   * Constructs a GetServicesCommand instance.*
   * @param {number} requestId - The unique identifier for the command request.
   */
  constructor(requestId) {
    super(requestId, 'get_services')
  }
}
