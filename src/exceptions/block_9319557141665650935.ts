import { ExceptionsList, ExceptionsManager } from '../helpers';
import { IDelegatesModule } from '../ioc/interfaces/modules';
import { SignedBlockType } from '../logic';

// assertValidBlockSlot(block: SignedBlockType): Promise<void>;

export default function block_9319557141665650935(excManager: ExceptionsManager) {
  excManager.registerExceptionHandler(
    ExceptionsList.assertValidSlot,
    'block_9319557141665650935',
    {
      canHandle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        return signedBlock.height === 729127;
      },
      handle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        // tslint:disable-next-line
        if (signedBlock.generatorPublicKey.toString('hex') === 'd1d9c1bf3d6d651e6b061ee0d2fc5021afe1869e2fcaf54634dbbe42815ae065') {
          return Promise.resolve();
        }
        return Promise.reject('[block_9319557141665650935] Exception handling error should\'ve been a different generator');
      },
    });
    return Promise.resolve();
}
