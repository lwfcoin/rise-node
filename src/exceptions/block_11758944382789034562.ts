import { ExceptionsList, ExceptionsManager } from '../helpers';
import { IDelegatesModule } from '../ioc/interfaces/modules';
import { SignedBlockType } from '../logic';

// assertValidBlockSlot(block: SignedBlockType): Promise<void>;

export default function block_11758944382789034562(excManager: ExceptionsManager) {
  excManager.registerExceptionHandler(
    ExceptionsList.assertValidSlot,
    'block_11758944382789034562',
    {
      canHandle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        return signedBlock.height === 775367;
      },
      handle(obj: IDelegatesModule, signedBlock: SignedBlockType) {
        // tslint:disable-next-line
        if (signedBlock.generatorPublicKey.toString('hex') === '698ea6c81b6163825d17ec8a773c458097cc60741acd54cb1de9e987cf3c1a2e') {
          return Promise.resolve();
        }
        return Promise.reject('[block_11758944382789034562] Exception handling error should\'ve been a different generator');
      },
    });
    return Promise.resolve();
}
