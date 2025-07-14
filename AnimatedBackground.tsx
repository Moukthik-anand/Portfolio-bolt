import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface MatrixColumn {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  opacity: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { effectiveTheme } = useTheme();
  const animationRef = useRef<number>();
  const columnsRef = useRef<MatrixColumn[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const codeSnippets = [
      'function()', 'const x =', 'if (true)', 'return;', 'import {', '} from', 
      'useState()', 'useEffect', 'async/await', 'Promise', '.then()', '.catch()',
      'console.log', 'document.', 'window.', 'localStorage', 'JSON.parse',
      'Array.map', '.filter()', '.reduce()', 'setTimeout', 'setInterval',
      'addEventListener', 'querySelector', 'createElement', 'appendChild',
      'className =', 'style.', 'innerHTML =', 'textContent', 'getAttribute',
      'fetch()', 'response.', '.json()', 'try {', 'catch (e)', 'finally {',
      'for (let i', 'while (', 'switch (', 'case:', 'break;', 'continue;',
      'class', 'extends', 'constructor', 'this.', 'super()', 'static',
      'public', 'private', 'protected', 'interface', 'type', 'enum',
      'boolean', 'string', 'number', 'object', 'undefined', 'null',
      'true', 'false', 'void', 'any', 'unknown', 'never',
      '&&', '||', '===', '!==', '>=', '<=', '=>', '...', '??',
      'SELECT *', 'FROM', 'WHERE', 'JOIN', 'INSERT', 'UPDATE', 'DELETE',
      'CREATE', 'ALTER', 'DROP', 'INDEX', 'PRIMARY', 'FOREIGN', 'KEY',
      'import', 'export', 'default', 'module', 'require', '__dirname',
      'process.', 'Buffer', 'stream', 'fs.', 'path.', 'url.',
      'React.', 'useState', 'useRef', 'useCallback', 'useMemo', 'useContext',
      'props.', 'state.', 'setState', 'render()', 'componentDidMount',
      '<div>', '</div>', '<span>', '<p>', '<h1>', '<img>', '<a>',
      'className', 'onClick', 'onChange', 'onSubmit', 'value=', 'id=',
      'margin:', 'padding:', 'display:', 'flex', 'grid', 'position:',
      'background:', 'color:', 'font-size:', 'border:', 'radius:',
      'transform:', 'transition:', 'animation:', 'opacity:', 'z-index:',
      'AI', 'ML', 'Data', 'Science', 'Python', 'SQL', 'Algorithm',
      'Neural', 'Network', 'Deep', 'Learning', 'TensorFlow', 'PyTorch',
      'pandas', 'numpy', 'sklearn', 'matplotlib', 'seaborn', 'jupyter',
      'API', 'REST', 'GraphQL', 'HTTP', 'HTTPS', 'JSON', 'XML',
      'OAuth', 'JWT', 'Auth', 'Token', 'Session', 'Cookie', 'CORS',
      'Git', 'GitHub', 'commit', 'push', 'pull', 'merge', 'branch',
      'Docker', 'Kubernetes', 'AWS', 'Azure', 'Cloud', 'Server',
      'Database', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Cache',
      'Security', 'Encryption', 'Hash', 'Salt', 'HTTPS', 'SSL', 'TLS',
      '01001001', '11010011', '10101010', '01110100', '11001100', '00110011',
      'アルゴリズム', 'データ', 'プログラム', 'コード', 'システム', 'ネットワーク'
    ];

    const createColumns = () => {
      const columns: MatrixColumn[] = [];
      const columnWidth = 16;
      const numColumns = Math.floor(canvas.width / columnWidth);

      for (let i = 0; i < numColumns; i++) {
        const columnHeight = Math.floor(Math.random() * 15) + 10;
        const chars: string[] = [];
        
        for (let j = 0; j < columnHeight; j++) {
          chars.push(codeSnippets[Math.floor(Math.random() * codeSnippets.length)]);
        }

        columns.push({
          x: i * columnWidth,
          y: Math.random() * canvas.height - columnHeight * 18,
          speed: Math.random() * 1.5 + 0.8,
          chars,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
      columnsRef.current = columns;
    };

    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = effectiveTheme === 'dark' 
        ? 'rgba(0, 0, 0, 0.02)' 
        : 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      columnsRef.current.forEach((column) => {
        column.chars.forEach((char, index) => {
          const y = column.y + index * 18;
          
          // Skip if outside canvas
          if (y < -18 || y > canvas.height + 18) return;

          // Calculate opacity based on position in column (fade effect)
          const fadeOpacity = index === 0 ? 1 : Math.max(0.2, 1 - (index * 0.08));
          const finalOpacity = column.opacity * fadeOpacity;

          // Set color based on theme and position
          if (index === 0) {
            // Brightest character at the front
            ctx.fillStyle = effectiveTheme === 'dark' 
              ? `rgba(200, 200, 200, ${finalOpacity})` 
              : `rgba(80, 80, 80, ${finalOpacity})`;
          } else {
            // Dimmer characters behind
            ctx.fillStyle = effectiveTheme === 'dark' 
              ? `rgba(140, 140, 140, ${finalOpacity * 0.6})` 
              : `rgba(100, 100, 100, ${finalOpacity * 0.6})`;
          }

          ctx.font = '11px "Courier New", monospace';
          ctx.fillText(char, column.x, y);
        });

        // Move column down
        column.y += column.speed * 1.2;

        // Reset column when it goes off screen
        if (column.y > canvas.height + column.chars.length * 18) {
          column.y = -column.chars.length * 18;
          column.speed = Math.random() * 2.5 + 1.2;
          column.opacity = Math.random() * 0.7 + 0.4;
          
          // Refresh some characters
          for (let i = 0; i < column.chars.length; i++) {
            if (Math.random() < 0.5) {
              column.chars[i] = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            }
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createColumns();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createColumns();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [effectiveTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        opacity: effectiveTheme === 'dark' ? 0.6 : 0.4,
        zIndex: 0
      }}
    />
  );
}