import { ExceptionsList, ExceptionsManager } from '../helpers';
import { IDelegatesModule } from '../ioc/interfaces/modules';
import { SignedBlockType } from '../logic';

// assertValidBlockSlot(block: SignedBlockType): Promise<void>;

export default function block_9107296206050614818(excManager: ExceptionsManager) {
  excManager.registerExceptionHandler(
    ExceptionsList.assertValidSlot,
    'block_9107296206050614818',
    {
      canHandle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        return signedBlock.height === 1290327;
      },
      handle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        // tslint:disable-next-line
        if (signedBlock.generatorPublicKey.toString('hex') === '91b2d00acd99bdf292cabec0dc8bf471e6f6dff9cf8cf354133e2fdb984505ac') {
          return Promise.resolve();
        }
        return Promise.reject('[block_9107296206050614818] Exception handling error should\'ve been a different generator');
      },
    });
    return Promise.resolve();
}
