import { ExceptionsList, ExceptionsManager } from '../helpers';
import { IDelegatesModule } from '../ioc/interfaces/modules';
import { SignedBlockType } from '../logic';

// assertValidBlockSlot(block: SignedBlockType): Promise<void>;

export default function block_3418472308088137242(excManager: ExceptionsManager) {
  excManager.registerExceptionHandler(
    ExceptionsList.assertValidSlot,
    'block_3418472308088137242',
    {
      canHandle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        return signedBlock.height === 1290367;
      },
      handle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        // tslint:disable-next-line
        if (signedBlock.generatorPublicKey.toString('hex') === 'c494fda621385600d0bded495508d12f4bca56fccf3bc6013d81d941915231ec') {
          return Promise.resolve();
        }
        return Promise.reject('[block_3418472308088137242] Exception handling error should\'ve been a different generator');
      },
    });
    return Promise.resolve();
}
