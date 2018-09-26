import { ExceptionsList, ExceptionsManager } from '../helpers';
import { IDelegatesModule } from '../ioc/interfaces/modules';
import { SignedBlockType } from '../logic';

// assertValidBlockSlot(block: SignedBlockType): Promise<void>;

export default function block_8798611478810602119(excManager: ExceptionsManager) {
  excManager.registerExceptionHandler(
    ExceptionsList.assertValidSlot,
    'block_8798611478810602119',
    {
      canHandle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        return signedBlock.height === 714922;
      },
      handle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        // tslint:disable-next-line
        if (signedBlock.generatorPublicKey.toString('hex') === '41be7c2aad856f2992883db931d198e8c27af4ce9bbb9868223199dfc46a2089') {
          return Promise.resolve();
        }
        return Promise.reject('[block_8798611478810602119] Exception handling error should\'ve been a different generator');
      },
    });
    return Promise.resolve();
}
