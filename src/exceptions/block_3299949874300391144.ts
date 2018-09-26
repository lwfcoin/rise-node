import { ExceptionsList, ExceptionsManager } from '../helpers';
import { IDelegatesModule } from '../ioc/interfaces/modules';
import { SignedBlockType } from '../logic';

// assertValidBlockSlot(block: SignedBlockType): Promise<void>;

export default function block_3299949874300391144(excManager: ExceptionsManager) {
  excManager.registerExceptionHandler(
    ExceptionsList.assertValidSlot,
    'block_3299949874300391144',
    {
      canHandle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        return signedBlock.height === 775344;
      },
      handle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        // tslint:disable-next-line
        if (signedBlock.generatorPublicKey.toString('hex') === '375a3a9ebef0e5cce55dc878bc7993406e75dd27331e5a0a3f1e32536317168e') {
          return Promise.resolve();
        }
        return Promise.reject('[block_3299949874300391144] Exception handling error should\'ve been a different generator');
      },
    });
    return Promise.resolve();
}
