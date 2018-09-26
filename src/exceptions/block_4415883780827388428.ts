import { ExceptionsList, ExceptionsManager } from '../helpers';
import { IDelegatesModule } from '../ioc/interfaces/modules';
import { SignedBlockType } from '../logic';

// assertValidBlockSlot(block: SignedBlockType): Promise<void>;

export default function block_4415883780827388428(excManager: ExceptionsManager) {
  excManager.registerExceptionHandler(
    ExceptionsList.assertValidSlot,
    'block_4415883780827388428',
    {
      canHandle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        return signedBlock.height === 729173;
      },
      handle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        // tslint:disable-next-line
        if (signedBlock.generatorPublicKey.toString('hex') === '943e0646d9de5be948b86d142c8d5cb4e80a8c4b07befb079f546d3f600d3fff') {
          return Promise.resolve();
        }
        return Promise.reject('[block_4415883780827388428] Exception handling error should\'ve been a different generator');
      },
    });
    return Promise.resolve();
}
