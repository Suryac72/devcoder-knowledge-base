import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import Devcoder from '../app/(home)/assets/Devcoder.png';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-3">
          <div className="block dark:hidden">
              <Image
                src={Devcoder}
                alt="Devcoder.io"
                width={45}
                height={45}
                className="mx-auto h-auto w-auto rounded-full"
              />
            </div>

            <div className="hidden dark:block">
              <Image
                src={Devcoder}
                alt="Devcoder.io (dark)"
                width={45}
                height={45}
                className="mx-auto h-auto w-auto filter invert rounded-full"
              />
            </div>
          <span>Devcoder Knowledge Base</span>
        </span>
      ),
    },
  };
}
