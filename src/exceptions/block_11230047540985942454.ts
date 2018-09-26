import { ExceptionsList, ExceptionsManager } from '../helpers';
import { IDelegatesModule } from '../ioc/interfaces/modules';
import { SignedBlockType } from '../logic';

// assertValidBlockSlot(block: SignedBlockType): Promise<void>;

export default function block_11230047540985942454(excManager: ExceptionsManager) {
  excManager.registerExceptionHandler(
    ExceptionsList.assertValidSlot,
    'block_11230047540985942454',
    {
      canHandle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        return signedBlock.height === 714777;
      },
      handle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        // tslint:disable-next-line
        if (signedBlock.generatorPublicKey.toString('hex') === '04fffc35c971a79458f273f4a0570ba8541348aef491a67fdb1ac470658b1b03') {
          return Promise.resolve();
        }
        return Promise.reject('[block_11230047540985942454] Exception handling error should\'ve been a different generator');
      },
    });
    return Promise.resolve();
}
